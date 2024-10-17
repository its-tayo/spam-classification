import React, { FC } from "react";
import { object, string } from "yup";
import { Formik, FormikHelpers, Form } from "formik";

import { TextArea, Button } from "@/components";
import { FormProps, ClassificationFormData } from "@/interfaces/forms";

const initialValues = { message: "" };
const validationSchema = object().shape({
  message: string().required(),
});

const ClassificationForm: FC<FormProps<ClassificationFormData>> = ({
  handleSubmit,
}) => {
  const onSubmit = async (
    values: ClassificationFormData,
    actions: FormikHelpers<ClassificationFormData>
  ) => {
    await handleSubmit(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="w-full">
          <TextArea name="message" placeholder="Enter your message..." />

          <div>
            <Button
              loading={isSubmitting}
              label="Classify Message"
              disabled={!isValid || isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ClassificationForm;
