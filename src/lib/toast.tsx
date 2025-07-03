import { toast } from "sonner";
import { BookCheck, XCircle, Info, Loader2, CheckCircle } from "lucide-react";

export const showToast = {
  success: (message: string) =>
    toast.success(message, {
      icon: <BookCheck className="text-green-700" />,
    }),

  error: (message: string) =>
    toast.error(message, {
      icon: <XCircle className="text-red-700" />,
    }),

  info: (message: string) =>
    toast(message, {
      icon: <Info className="text-yellow-600" />,
    }),

  loading: (message: string) =>
    toast.loading(message, {
      icon: <Loader2 className="animate-spin text-muted-foreground" />,
    }),

  done: (message: string) =>
    toast.success(message, {
      icon: <CheckCircle className="text-emerald-700" />,
    }),
};
