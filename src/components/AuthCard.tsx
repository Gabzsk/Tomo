import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

type AuthCardProps = {
  title: string;
  children: React.ReactNode;
};

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Card className="w-full max-w-sm p-4 shadow-lg rounded-2xl bg-muted text-foreground">
        <CardHeader>
          <CardTitle className="text-center text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
