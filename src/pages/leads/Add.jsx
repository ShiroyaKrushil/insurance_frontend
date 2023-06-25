import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import ClearIcon from "@mui/icons-material/Clear";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FormHelperText, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { FiSave } from "react-icons/fi";
// import { GiCancel } from "react-icons/gi";

export default function ScrollDialog(props) {
  const [scroll, setScroll] = React.useState("paper");
  const [instagram,setInstagram] = useState('');
  const [twitter,setTwitter] = useState('');
  
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);

  // -----------  validationSchema
  const validationSchema = yup.object({
    firstName: yup.string().required("Frist Name is required"),
    lastName: yup.string().required("Last Name is required"),
    gender: yup.string().required("Gender is required"),
    phoneNumber: yup.number().required("Email Address is required"),
    emailAddress: yup.string().required("Email Address is required"),
    address: yup.string().required("Address is required"),
  });

  //-----------   initialValues
  const initialValues = {
    firstName: "",
    lastName: "",
    date_of_birth: "",
    gender: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
  };

  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    // onSubmit: async (values,{resetForm}) => {
    //   try {
    //     const result = await axios.post(
    //       "http://127.0.0.1:5000/lead/add",
    //       values
    //     );
    //     dispatch({ type: "ADD_LEAD", payload: result.data });
    //     props.handleClose();
    //     resetForm();
    //     console.log(values)
    //   } catch (error) {
    //     console.log(error);
    //   }

    // },
  });

    const instaUrl = `https://www.instagram.com/${instagram}`;
    const twitterUrl = `https://twitter.com/${twitter}`;
  return (
    <div>
      <Dialog
        open={props.open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#2b4054",
            color: "white",
          }}
        >
          <Typography variant="h3">Add New </Typography>
          <Typography>
            <ClearIcon
              onClick={props.handleClose}
              style={{ cursor: "pointer" }}
            />
          </Typography>
        </DialogTitle>

        <DialogContent dividers={scroll === "paper"}>
          <form>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography style={{ marginBottom: "15px" }} variant="h3">
                Basic Information
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 5, md: 4 }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="fristName"
                    name="fristName"
                    label="First name"
                    maxRows={10}
                    fullWidth={true}
                    value={formik.values.fristName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fristName &&
                      Boolean(formik.errors.fristName)
                    }
                    helperText={
                      formik.touched.fristName && formik.errors.fristName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth={true}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker label="Date Of Birth" />
                    </LocalizationProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone number"
                    type="number"
                    fullWidth={true}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="emailAddress"
                    name="emailAddress"
                    label="Email Address"
                    fullWidth={true}
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.emailAddress &&
                      Boolean(formik.errors.emailAddress)
                    }
                    helperText={
                      formik.touched.emailAddress && formik.errors.emailAddress
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="gender"
                      name="gender"
                      label="Gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female </MenuItem>
                      <MenuItem value="Other">Other </MenuItem>
                    </Select>
                    <FormHelperText
                      error={
                        formik.touched.gender && Boolean(formik.errors.gender)
                      }
                    >
                      {formik.touched.gender && formik.errors.gender}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="address"
                    name="address"
                    label="Address"
                    multiline
                    fullWidth={true}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
              </Grid>
              <Typography
                style={{ marginBottom: "15px", marginTop: "15px" }}
                variant="h3"
              >
                Source Information
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 5, md: 4 }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Lead Source
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Lead Source"
                    >
                      <MenuItem value="Website Referrals">
                        Website Referrals
                      </MenuItem>
                      <MenuItem value="Advertising">Advertising </MenuItem>
                      <MenuItem value="Social Media">Social Media </MenuItem>
                      <MenuItem value="Events and Trade Shows">
                        Events and Trade Shows{" "}
                      </MenuItem>
                      <MenuItem value="Call Centers or Telemarketing">
                        Call Centers or Telemarketing
                      </MenuItem>
                      <MenuItem value="Partnerships">Partnerships</MenuItem>
                      <MenuItem value="Direct Mail">Direct Mail </MenuItem>
                      <MenuItem value="Online Aggregators or Comparison Websites">
                        Online Aggregators or Comparison Websites
                      </MenuItem>
                      <MenuItem value="Content Marketing">
                        Content Marketing
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography
                style={{ marginBottom: "15px", marginTop: "15px" }}
                variant="h3"
              >
                Lead Details
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 5, md: 4 }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Lead Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Lead Status"
                    >
                      <MenuItem value="New">New</MenuItem>
                      <MenuItem value="Contacted">Contacted </MenuItem>
                      <MenuItem value="Qualified">Qualified </MenuItem>
                      <MenuItem value="Not Qualified"> Not Qualified </MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Closed/Won">Closed/Won</MenuItem>
                      <MenuItem value="Closed/Lost">Closed/Lost </MenuItem>
                      <MenuItem value="Follow-up Required">
                        Follow-up Required
                      </MenuItem>
                      <MenuItem value="On Hold"> On Hold</MenuItem>
                      <MenuItem value="Converted"> Converted</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography
                style={{ marginBottom: "15px", marginTop: "15px" }}
                variant="h3"
              >
                Additional Contact Details
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 5, md: 4 }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="alternate_pno"
                    name="alternate_pno"
                    type="number"
                    label="Alternate phone number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="additional_email"
                    name="additional_email"
                    type="email"
                    label="Additional email address"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="socoal_media_p"
                    name="socoal_media_p"
                    type=""
                    label="Instagram profile"
                    fullWidth={true}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  { instagram && <a href={instaUrl} target="_blank">Link</a>}
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    id="socoal_media_p"
                    name="socoal_media_p"
                    type=""
                    label="Twitter profile"
                    fullWidth={true}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  { twitter && <a href={twitterUrl} target="_blank">Link</a>}
                </Grid>
              </Grid>
              <Typography
                style={{ marginBottom: "15px", marginTop: "15px" }}
                variant="h3"
              >
                Policy Requirements
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 0, sm: 5, md: 4 }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Type of insurance
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Type of insurance"
                    >
                      <MenuItem value="Auto">Auto</MenuItem>
                      <MenuItem value="Home Insurance">Home Insurance</MenuItem>
                      <MenuItem value="Health Insurance">
                        Health Insurance
                      </MenuItem>
                      <MenuItem value="Life Insurance">Life Insurance</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Desired coverage amount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      endAdornment={
                        <InputAdornment position="end">&#8377;</InputAdornment>
                      }
                      label="Desired coverage amount "
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    id="specific_policy_features"
                    name="specific_policy_features"
                    label="Specific policy features"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            onClick={formik.handleSubmit}
            style={{ textTransform: "capitalize" }}
            // startIcon={<FiSave />}
          >
            Save
          </Button>
          <Button
            type="reset"
            variant="outlined"
            style={{ textTransform: "capitalize" }}
            // startIcon={<GiCancel />}
            onClick={props.handleClose}
          >
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
