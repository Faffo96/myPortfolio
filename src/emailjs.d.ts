declare module 'emailjs-com' {
    export function sendForm(service_id: string, template_id: string, form: HTMLFormElement, user_id: string): Promise<any>;
  }