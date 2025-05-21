import { Button } from "./ui/button";

type Props = React.ComponentProps<typeof Button>;

export function PrimaryButton(props: Props) {
  return (
    <Button
      className="w-full mt-10 rounded-full bg-primary text-white hover:bg-primary-hover"
      {...props}
    />
  );
}
