"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { practices } from "@/lib/site";

type FormState = "empty" | "editing" | "error" | "submitting" | "success";

type Fields = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  practice: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  practice: "",
  message: "",
};

function isBlank(fields: Fields) {
  return Object.values(fields).every((value) => value.trim() === "");
}

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.practice) {
    errors.practice = "Choose the practice this brief belongs to.";
  }
  if (fields.message.trim().length < 20) {
    errors.message = "Give us at least a short brief (20 characters).";
  }
  return errors;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("practice") ?? "";
  const initial = useMemo<Fields>(
    () => ({
      ...emptyFields,
      practice: practices.some((item) => item.slug === requested)
        ? requested
        : "",
    }),
    [requested],
  );
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormState>(
    initial.practice ? "editing" : "empty",
  );

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    const next = { ...fields, [key]: value };
    setFields(next);
    setStatus(isBlank(next) ? "empty" : "editing");
    if (errors[key]) {
      setErrors((current) => {
        const copy = { ...current };
        delete copy[key];
        return copy;
      });
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrors({});
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  function reset() {
    setFields(emptyFields);
    setErrors({});
    setStatus("empty");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-navy"
      >
        <CheckCircle2 className="size-8 text-emerald-700" />
        <h2 className="font-heading mt-4 text-2xl font-semibold">Brief received</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This is a local confirmation only — no message has been emailed yet,
          because office contact details are still being published. We have
          captured your {fields.practice ? getPracticeLabel(fields.practice) : ""}{" "}
          enquiry in this session. Send another note if you need to add detail.
        </p>
        <Button className="mt-5 h-10 px-4" type="button" onClick={reset}>
          Send another brief
        </Button>
      </div>
    );
  }

  const empty = status === "empty";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {empty ? (
        <p className="rounded-lg border border-dashed border-gold/50 bg-gold-soft/30 px-4 py-3 text-sm text-navy">
          Form is empty. Name, email, practice, and a short brief are required.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          <CircleAlert className="mt-0.5 size-4 shrink-0" />
          Please fix the highlighted fields before sending.
        </p>
      ) : null}

      <Field
        id="name"
        label="Full name"
        error={errors.name}
        required
      >
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={fields.name}
          aria-invalid={Boolean(errors.name)}
          className="h-11"
          onChange={(event) => update("name", event.target.value)}
        />
      </Field>

      <Field id="organization" label="Organization">
        <Input
          id="organization"
          name="organization"
          autoComplete="organization"
          value={fields.organization}
          className="h-11"
          onChange={(event) => update("organization", event.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            className="h-11"
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            className="h-11"
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>

      <Field id="practice" label="Practice" error={errors.practice} required>
        <Select
          value={fields.practice || null}
          onValueChange={(value) => update("practice", value ?? "")}
        >
          <SelectTrigger
            id="practice"
            className="h-11 w-full"
            aria-invalid={Boolean(errors.practice)}
          >
            <SelectValue placeholder="Select a practice" />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {practices.map((practice) => (
              <SelectItem key={practice.slug} value={practice.slug}>
                {practice.kicker}: {practice.shortTitle}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field id="message" label="Brief" error={errors.message} required>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          placeholder="Scope, location, timeline, and what a good outcome looks like."
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

      <Button
        type="submit"
        className="h-11 w-full px-6 sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send brief"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-destructive">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function getPracticeLabel(slug: string) {
  const match = practices.find((item) => item.slug === slug);
  return match ? `${match.kicker} / ${match.shortTitle}` : slug;
}
