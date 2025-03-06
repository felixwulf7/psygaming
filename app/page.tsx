import { redirect } from 'next/navigation';
import { defaultLanguage } from './config/languages';

export default function RootPage() {
  // Redirect to the default language
  redirect(`/${defaultLanguage}`);
}
