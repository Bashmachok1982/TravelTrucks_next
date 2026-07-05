"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { createBookingRequest } from "@/lib/api";
import styles from "./BookingForm.module.css";

const schema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function BookingForm({ camperId }: { camperId: string }) {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await createBookingRequest(camperId, values);
        toast.success(res.message);
        resetForm();
      } catch {
        toast.error("Something went wrong. Try again.");
      }
    },
  });

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        {/* Два инпута в одном блоке */}
        <div className={styles.inputs}>
          <div className={styles.field}>
            <input
              className={`${styles.input} ${
                formik.touched.name && formik.errors.name
                  ? styles.inputError
                  : ""
              }`}
              name="name"
              placeholder="Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <span className={styles.error}>{formik.errors.name}</span>
            )}
          </div>

          <div className={styles.field}>
            <input
              className={`${styles.input} ${
                formik.touched.email && formik.errors.email
                  ? styles.inputError
                  : ""
              }`}
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className={styles.error}>{formik.errors.email}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={styles.btn}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
