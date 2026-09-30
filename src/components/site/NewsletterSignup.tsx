import { useState } from "react";
import { Loader2, MailPlus } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Enter a valid email address" })
  .max(255, { message: "Email must be under 255 characters" });

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = emailSchema.safeParse(email);

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Enter a valid email address");
      return;
    }

    setSaving(true);
    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase() });
    setSaving(false);

    if (insertError) {
      if (insertError.code === "23505" || insertError.message.includes("duplicate")) {
        setEmail("");
        toast.success("You're already on the list — thank you!");
        return;
      }
      toast.error("We couldn't sign you up. Please try again.");
      return;
    }

    setEmail("");
    setError(undefined);
    toast.success("You're subscribed — FBC updates are on the way.");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <label htmlFor="nl-email" className="text-xs font-semibold uppercase tracking-[0.18em]">
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="nl-email"
          name="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(undefined);
          }}
          maxLength={255}
          autoComplete="email"
          placeholder="you@example.org"
          aria-invalid={!!error}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
        <button
          type="submit"
          disabled={saving}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {saving ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <MailPlus className="size-4" aria-hidden="true" />
          )}
          {saving ? "Signing up…" : "Subscribe"}
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      <p className="mt-3 text-xs text-muted-foreground">
        Occasional updates on programs, showcases and opportunities. No spam, unsubscribe any time.
      </p>
    </form>
  );
}
