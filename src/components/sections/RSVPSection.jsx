import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "../../hooks/useForm";
import { HEAR_ABOUT_OPTIONS } from "../../utils/constants";
import { register } from "../../api/authApi";
import dataImage from "../../assets/assets.jpeg";

const FIELDS = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    half: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    half: true,
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "doe@company.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    placeholder: "08035678900",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Statisense",
  },
  {
    name: "title",
    label: "Title / Role",
    type: "text",
    placeholder: "Head of Data",
  },
];

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    hearAbout: "",
  };

  const validationRules = {
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, email: true },
    phone: {required: true},
    company: { required: true },
    title: { required: true },
  };

  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useForm(initialFormData);

  const onSubmit = async (data) => {
    try {
      setErrorMessage("");
      const res = await register(data);
      setSubmitted(true);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setErrorMessage(
          "Request timed out. The server might be slow. Please try again.",
        );
      } else if (error.response?.status === 409) {
        setErrorMessage(
          "This email is already registered. Please use a different email address.",
        );
      } else if (error.response?.status === 400) {
        setErrorMessage("Please fill in all required fields correctly.");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit, validationRules);
  };

  return (
    <section
      id="rsvp"
      className="relative py-28 px-5 bg-dark-800 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${dataImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-800/60 to-dark-900/70" />
      
      <div
        className="orb orb-pulse absolute left-1/2 -translate-x-1/2 -top-20 w-[700px] h-[350px] pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <StarIcon className="w-3 h-3 text-primary-500" />
            <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-primary-500">
              RSVP · Free · Limited
            </span>
            <StarIcon className="w-3 h-3 text-primary-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] text-white leading-tight mb-6">
            Reserve your seat.
          </h2>
          <p className="text-gray-200 text-base leading-relaxed max-w-sm mx-auto">
            Every guest is reviewed personally. RSVPs receive venue details,
            Event Invite and a small package before the event.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-primary-500/30 via-transparent to-primary-500/10 pointer-events-none z-10" />

          <div className="relative bg-dark-700/60 backdrop-blur-xl rounded-2xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                  >
                    <CheckCircleIcon className="w-16 h-16 text-primary-400" />
                  </motion.div>
                  <h3 className="text-3xl text-white mb-3">
                    Your seat is reserved.
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed max-w-xs mx-auto mb-6">
                    We'll review your RSVP and confirm within 48 hours. Watch
                    your inbox.
                  </p>
                  <p className="text-xs tracking-widest uppercase text-primary-600">
                    The Retirement Party · Lagos · 10 July 2026
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onFormSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errorMessage && (
                    <motion.div
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    {FIELDS.slice(0, 2).map((f) => (
                      <FieldInput
                        key={f.name}
                        field={f}
                        value={formData[f.name]}
                        onChange={handleChange}
                        error={errors[f.name]}
                      />
                    ))}
                  </div>

                  {FIELDS.slice(2).map((f) => (
                    <FieldInput
                      key={f.name}
                      field={f}
                      value={formData[f.name]}
                      onChange={handleChange}
                      error={errors[f.name]}
                    />
                  ))}

                  <div className="field-wrap">
                    <label className="field-label">
                      How did you hear about this?
                    </label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="field-input"
                    >
                      <option value="" disabled>
                        Select an option…
                      </option>
                      {HEAR_ABOUT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-200 mt-2 ${
                      isSubmitting
                        ? "bg-primary-700 text-white cursor-not-allowed opacity-60"
                        : "bg-primary-500 text-white hover:bg-primary-400 shadow-[0_0_32px_rgba(6,182,212,0.2)] hover:shadow-[0_0_48px_rgba(6,182,212,0.4)]"
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting…
                      </span>
                    ) : (
                      "Reserve My Seat →"
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-200 tracking-wider">
                    — No payment. No spam. We confirm within 48 hours. —
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FieldInput = ({ field, value, onChange, error }) => (
  <div className="field-wrap">
    <label htmlFor={field.name} className="field-label">
      {field.label}
      {field.name !== "hearAbout" && (
        <span className="text-primary-600 ml-0.5">*</span>
      )}
    </label>
    <input
      id={field.name}
      name={field.name}
      type={field.type}
      value={value}
      onChange={onChange}
      placeholder={field.placeholder}
      className={`field-input ${error ? "field-error-state" : ""}`}
      autoComplete="off"
    />
    {error && <span className="field-error-msg">{error}</span>}
  </div>
);

export default RSVPSection;
