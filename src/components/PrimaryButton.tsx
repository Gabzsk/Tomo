import { Button } from "./ui/button";
import { cn } from "@/lib/utils"; // ou de onde seu projeto importar `cn`

type Props = React.ComponentProps<typeof Button>;

export function PrimaryButton({ className, ...rest }: Props) {
  return (
    <Button
      {...rest}
      className={cn(
        "w-full mt-5 rounded-full bg-[#4A5F2C] text-white hover:bg-[#3E4F22] px-4 py-2 cursor-pointer",
        className
      )}
    />
  );
}
