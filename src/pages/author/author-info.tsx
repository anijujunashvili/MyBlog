import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { popTags } from "@/static/static.ts";
import { badge } from "./author.styles.ts";
import { useTranslation } from "react-i18next";

const AuthorInfo = () => {
  const { t } = useTranslation();
  return (
    <Card className="shadow">
      <CardHeader className="font-semibold">About Jane Doe</CardHeader>
      <CardContent>
        <p className="text-mutedForeground">
          Jane Doe is a seasoned software engineer with over a decade of
          experience in web development. She specializes in JavaScript, React,
          and Node.js, and has a keen interest in emerging technologies like AI
          and blockchain. Jane is a frequent speaker at tech conferences and
          contributes to various open-source projects.
        </p>

        <h3 className="col-1 mb-2 mt-4 font-semibold">{t("author.skills")}</h3>
        <div className="flex flex-wrap gap-2">
          {popTags.map((tag) => {
            return (
              <Badge variant="secondary" className={badge()}>
                {tag}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorInfo;
