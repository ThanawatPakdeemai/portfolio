import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { FORM_SCHEMA_CONTACT } from "@/constants/regex";
import { TFormValues } from "@/features/contact/interfaces/contact.interface";
import WarningIcon from "@/components/icons/WarningIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailAction } from "@/features/contact/hooks/useContactUs";

const SendIcon = dynamic(() => import("@/icons/SendIcon"));
const LoadingIcon = dynamic(() => import("@/icons/LoadingIcon"));

const ContactDetail = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormValues>({
    resolver: zodResolver(FORM_SCHEMA_CONTACT),
  });

  // const sendEmail = () => {
  //   const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
  //   const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  //   const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  //   setLoading(true);
  //   if (form.current) {
  //     emailjs
  //       .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
  //         publicKey: PUBLIC_KEY,
  //       })
  //       .then(
  //         () => {
  //           toast.success("Send Email Successfully ", {
  //             style: {
  //               background: "#313131",
  //               color: "#fff",
  //             },
  //           });
  //           reset();
  //         },
  //         () => {
  //           toast.error("Send Email Unsuccessfully ", {
  //             style: {
  //               background: "#313131",
  //               color: "#fff",
  //             },
  //           });
  //         },
  //       )
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     toast.error("Send Email Unsuccessfully ", {
  //       style: {
  //         background: "#313131",
  //         color: "#fff",
  //       },
  //     });
  //   }
  // };

  const onSubmit = async (data: TFormValues) => {
    setLoading(true);

    const result = await sendEmailAction(data);

    if (result?.success) {
      toast.success("Send Email Successfully ", {
        style: {
          background: "#313131",
          color: "#fff",
        },
      });
      reset();
    } else {
      toast.error("Send Email Failed", {
        style: {
          background: "#313131",
          color: "#fff",
        },
      });
    }

    setLoading(false);
  };

  return (
    <div className="h-full p-6">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-Roboto_Slab text-3xl text-white">Contact</h2>
        <span className="bg-yellow-primary my-4 inline-block h-1.5 w-[85px] rounded-xs"></span>
        <input
          className="input mb-6"
          placeholder="Subject"
          type="text"
          {...register("subject")}
        />
        {errors?.subject && (
          <p className="text-yellow-primary -mt-4 mb-2 flex items-center gap-1.5">
            <WarningIcon width={18} height={18} stroke="#efc576" />
            {errors.subject.message}
          </p>
        )}
        <div className="mb-6 flex h-auto w-full flex-col justify-between gap-6 md:flex-row">
          <div className="flex w-full flex-col">
            <input
              className="input"
              placeholder="Full name"
              type="text"
              {...register("full_name")}
            />
            {errors?.full_name && (
              <p className="text-yellow-primary mt-3 flex items-center gap-1.5">
                <WarningIcon width={18} height={18} stroke="#efc576" />
                {errors.full_name.message}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col">
            <input
              className="input"
              placeholder="Email Address"
              type="text"
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-yellow-primary mt-3 flex items-center gap-1.5">
                <WarningIcon width={18} height={18} stroke="#efc576" />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <textarea
          className="input area !h-[270px]"
          placeholder="Email Address"
          {...register("message")}
        />
        {errors?.message && (
          <p className="text-yellow-primary mt-2 flex items-center gap-1.5">
            <WarningIcon width={18} height={18} stroke="#efc576" />
            {errors.message.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-black-01 group hover:bg-yellow-primary text-yellow-primary hover:text-black-second mt-6 ml-auto flex h-10 w-[100px] cursor-pointer items-center justify-center gap-2.5 rounded-[10px]"
        >
          {loading ? (
            <LoadingIcon
              width={20}
              height={20}
              className="text-yellow-primary group-hover:text-black-second"
            />
          ) : (
            <SendIcon
              width={20}
              height={20}
              className="text-yellow-primary group-hover:text-black-second"
            />
          )}
          Send
        </button>
        {/* <h2 className="font-Roboto_Slab -mt-4 text-3xl text-white">Document</h2>
      <span className="bg-yellow-primary my-4 inline-block h-1.5 w-[85px] rounded-xs"></span>
      <div className="flex max-w-max items-center gap-4 rounded-[10px] bg-white/[7%] px-3 py-4">
        <div className="bg-black-02 hover:text-yellow-primary mr-auto flex max-w-max flex-col items-center gap-2.5 rounded-lg p-2.5 font-medium text-white hover:cursor-pointer">
          <PdfIcon width={75} height={75} />
          <p>Resume-Thanawat.pdf</p>
        </div>
        <div className="bg-black-02 hover:text-yellow-primary mr-auto flex max-w-max flex-col items-center gap-2.5 rounded-lg p-2.5 font-medium text-white hover:cursor-pointer">
          <PdfIcon width={75} height={75} />
          <p>CV-Thanawat.pdf</p>
        </div>
      </div> */}
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ContactDetail;
