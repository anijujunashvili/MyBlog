import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticlesList } from "@/components/articles-list";
import AuthorInfo from "./author-info.tsx";
import { useTranslation } from "react-i18next";

const AuthorTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="articles">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="articles">{t("author.articles")}</TabsTrigger>
        <TabsTrigger value="about">{t("author.about")}</TabsTrigger>
      </TabsList>
      <TabsContent value="articles" className="mt-8 space-y-8">
        <ArticlesList />
      </TabsContent>
      <TabsContent value="about">
        <AuthorInfo />
      </TabsContent>
    </Tabs>
  );
};

export default AuthorTabs;
