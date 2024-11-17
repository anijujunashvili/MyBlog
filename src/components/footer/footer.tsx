import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-muted/50 mt-12 border-t">
        <div className="text-muted-foreground container mx-auto px-4 py-6 text-center">
          <p>&#169; 2024 MyBlog. {t("footer.rights")}</p>
        </div>
      </footer>
    </>
  );
};
