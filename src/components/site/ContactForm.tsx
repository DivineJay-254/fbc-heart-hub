import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please tell us your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  organisation: z.string().trim().max(120, { message: "Keep this under 120 characters" }),
  subject: z.string().trim().max(150, { message: "Keep this under 150 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

type Field = keyof z.infer<typeof contactSchema>;

const empty = { name: "", email: "", organisation: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sending, setSending] = useState(false);

  const update =
    (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: event.target.value }));
      setErrors((e) => ({ ...e, [field]: undefined }));
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setSending(true);
    const body = [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Organisation: ${parsed.data.organisation || "Not provided"}`,
      `Message: ${parsed.data.message}`,
    ].join("\\n");
    window.location.href = `mailto:freeblockcreatives@gmail.com?subject=${encodeURIComponent(parsed.data.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSending(false);
    setValues(empty);
    toast.success("Your email app is ready with the message.");
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-[0.18em]">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            value={values.name}
            onChange={update("name")}
            maxLength={100}
            autoComplete="name"
            placeholder="Full name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-[0.18em]">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={values.email}
            onChange={update("email")}
            maxLength={255}
            autoComplete="email"
            placeholder="you@example.org"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="cf-org" className="text-xs font-semibold uppercase tracking-[0.18em]">
            Organisation <span className="opacity-60">(optional)</span>
          </label>
          <input
            id="cf-org"
            name="organisation"
            value={values.organisation}
            onChange={update("organisation")}
            maxLength={120}
            placeholder="Partner, funder or school"
            className={inputClass}
            aria-invalid={!!errors.organisation}
          />
          {errors.organisation && (
            <p className="mt-1 text-xs text-destructive">{errors.organisation}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-subject" className="text-xs font-semibold uppercase tracking-[0.18em]">
            Subject <span className="opacity-60">(optional)</span>
          </label>
          <input
            id="cf-subject"
            name="subject"
            value={values.subject}
            onChange={update("subject")}
            maxLength={150}
            placeholder="Partnership, funding, volunteering…"
            className={inputClass}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-[0.18em]">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={values.message}
          onChange={update("message")}
          rows={5}
          maxLength={2000}
          placeholder="Tell us how you'd like to work with Free Block Creatives."
          className={inputClass}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {sending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
