export type FormType = 'contact' | 'inspection' | 'careers';

export type SendFormResult =
  | { ok: true }
  | { ok: false; error: string };

export async function sendForm(
  formType: FormType,
  fields: Record<string, string>
): Promise<SendFormResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType, fields }),
    });

    if (!res.ok) {
      let msg = `Server error (${res.status})`;
      try {
        const data = await res.json();
        if (data?.error) msg = data.error;
      } catch {
        /* ignore body parse errors */
      }
      return { ok: false, error: msg };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Network error — please check your connection.',
    };
  }
}
