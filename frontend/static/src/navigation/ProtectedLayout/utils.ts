import Swal from "sweetalert2";

export const whoseHandIsItAnyway = (user: any) => {
  if (user?.right_handed) {
    return "end";
  }
  return "start";
};

export const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 2000,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
