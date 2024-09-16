import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    try {
      // Make POST request to the server
      const response = await fetch("http://localhost:8080/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),  // Send the form values as JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Customer created successfully:", data);
      } else {
        console.error("Error creating customer");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE CUSTOMER" subtitle="Create a New Customer Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* Customer Code */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Customer Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.customer_code}
                name="customer_code"
                error={!!touched.customer_code && !!errors.customer_code}
                helperText={touched.customer_code && errors.customer_code}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Customer Name */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Customer Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.customer_name}
                name="customer_name"
                error={!!touched.customer_name && !!errors.customer_name}
                helperText={touched.customer_name && errors.customer_name}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Customer Type */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Customer Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.customer_type}
                name="customer_type"
                error={!!touched.customer_type && !!errors.customer_type}
                helperText={touched.customer_type && errors.customer_type}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Customer
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  customer_code: yup.string().required("Customer code is required"),
  customer_name: yup.string().required("Customer name is required"),
  customer_type: yup.string().required("Customer type is required"),
});

const initialValues = {
  customer_code: "",
  customer_name: "",
  customer_type: "",
};

  
  export default Form;