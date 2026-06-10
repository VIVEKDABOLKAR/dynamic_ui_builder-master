import { useContext } from "react";
import { useLibraryContext } from "../types/Context";

export function useActionContext(formData?: any) {
  const {onNavigate} = useLibraryContext();
  

  const showToast = (message: string) => {
    console.log("TOAST:", message);
    // replace with Snackbar / toast library if needed
  };

  return {
    navigate: onNavigate,
    showToast,
    formData,
  };
}