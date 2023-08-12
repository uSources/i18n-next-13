import { Locale, i18n } from "@/i18n-config";
import { Path, getByPath } from "dot-path-value";

import IntlMessageFormat from "intl-messageformat";
import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // @ts-ignore
  const locales: string[] = i18n.locales;
  const dictionary = await dictionaries[locale]?.();

  return (
    namespace: Path<typeof dictionary>,
    params?: Record<string, string>
  ) => {
    const messages = getByPath(dictionary, namespace) as string;
    return new IntlMessageFormat(messages, locales).format(params);
  };
};
