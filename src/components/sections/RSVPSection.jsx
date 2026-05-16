import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { TbUser, TbMail, TbBuilding, TbBriefcase, TbInfoCircle, TbPhoneCall } from "react-icons/tb";
import { HEAR_ABOUT_OPTIONS } from "../../utils/constants";
import { useCreateEventAttendee } from "../../api/authApi";
import SuccessView from "./SuccessView";
import dataImage from "../../assets/location.jpeg";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: createAttendee, isPending } = useCreateEventAttendee();

  const onSubmit = (data) => {
    setErrorMessage("");
    createAttendee(
      {
        firstName: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        title: data.title,
        hearAbout: data.hearAbout,
      },
      {
        onSuccess: (res) => {
          console.log("RSVP submitted:", res);
          setSubmitted(true);
          reset();
        },
        onError: (e) => {
          console.log(e);
          setErrorMessage(
            e?.response?.data?.message ??
              e?.message ??
              'Something went wrong, please try again'
          );
        },
      }
    );
  };
  const onFormSubmit = handleSubmit(onSubmit);

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
            <StarIcon className="w-3 h-3 text-white" />
            <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white font-sans">
              RSVP · Free · Limited
            </span>
            <StarIcon className="w-3 h-3 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] text-white leading-tight mb-6 font-sans">
            Reserve your seat.
          </h2>
          <p className="text-gray-200 text-base leading-relaxed max-w-sm mx-auto font-sans">
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
                <SuccessView
                  onRegisterAnother={() => setSubmitted(false)}
                />
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onFormSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errorMessage && (
                    <motion.div
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-sans"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-200 font-sans">
                        First Name *
                      </label>
                      <div className="relative">
                        <TbUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          {...register('name', { required: 'First name is required' })}
                          placeholder="Enter your first name"
                          className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                            }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400 font-sans">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-200 font-sans">
                        Last Name *
                      </label>
                      <div className="relative">
                        <TbUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          {...register('lastName', { required: 'Last name is required' })}
                          placeholder="Enter your last name"
                          className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.lastName
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                            }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-400 font-sans">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-200 font-sans">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <TbPhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          {...register('phone', { required: 'Phone number is required' })}
                          placeholder="Enter your phone number"
                          className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.phone
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                            }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-400 font-sans">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 font-sans">
                      Work Email *
                    </label>
                    <div className="relative">
                      <TbMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 font-sans">{errors.email.message}</p>
                      )}
                    </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 font-sans">
                      Company *
                    </label>
                    <div className="relative">
                      <TbBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        {...register('company', { required: 'Company is required' })}
                        placeholder="Enter your company"
                        className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.company
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                          }`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-400 font-sans">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 font-sans">
                      Title / Role *
                    </label>
                    <div className="relative">
                      <TbBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        {...register('title', { required: 'Title is required' })}
                        placeholder="Enter your title"
                        className={`w-full pl-12 pr-4 py-4 text-base text-white bg-slate-700/50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans ${errors.title
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-cyan-400/20 hover:border-cyan-400/40 focus:border-cyan-400'
                          }`}
                      />
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-400 font-sans">{errors.title.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 font-sans">
                      How did you hear about this?
                    </label>
                    <div className="relative">
                      <TbInfoCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        {...register('hearAbout')}
                        className="w-full px-10 py-4 text-base text-white bg-slate-700/50 border border-cyan-400/20 rounded-lg hover:border-cyan-400/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 font-sans"
                      >
                        <option value="" disabled>Select an option...</option>
                        {HEAR_ABOUT_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value} className="bg-slate-700 text-white pl-8">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className={`w-full py-4 px-6 text-base font-semibold rounded-lg transition-all duration-200 font-sans ${isPending
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-60'
                        : 'bg-white text-dark-800 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                  >
                    {isPending ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      'Reserve My Seat →'
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-200 tracking-wider font-sans">
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

export default RSVPSection;
