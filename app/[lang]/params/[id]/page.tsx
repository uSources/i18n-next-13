import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";

export default async function Params({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const t = await getDictionary(lang);
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {t("params.title")}
      </h2>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        {t("params.description", { id })}
      </p>
    </main>
  );
}
