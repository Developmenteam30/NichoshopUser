import Menu from "../../../../components/menu/Menu";
// import Notification from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import "../sellercentral.css";
import NavigationAndTItle from "../Component/NavigationAndTItle/NavigationAndTItle";
import TabPanelHolder from "../Component/TabPanel/tabpanel";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import Notification from "../../../../components/notification/Notification";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Bankaccount = () => {
    const showNotif = useSelector((state) => state.showNotif);
    return (
        <>
            <div>
                <div className="overview-page">
                    <Menu />
                </div>
                <div className="container-md mt-5">
                    <div className="card row">
                        <div class="card-body row">
                            <h5 class="card-title">Add a Bank Account</h5>
                            <hr/>
                            <p>Before creating your listing, please add a valid bank account number which will be used to easily payout funds from products sold.</p><br /><br />
                            <h6><b> Bank Account Holders Address</b></h6><br /><br />
                            <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <InputLabel>Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Full name" variant="outlined" />
                                </FormControl>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Street and number, P.O. box, c/o." variant="outlined" />
                                </FormControl>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Apartment, suite, unit, building, floor, etc." variant="outlined" />
                                </FormControl>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="City" variant="outlined" />
                                </FormControl>
                                <FormControl className="col-8 mb-4">
                                    <TextField id="outlined-basic" label="State/Province/Region" variant="outlined" />
                                </FormControl><br />
                                <FormControl className="col-5 mb-4">
                                    <TextField id="outlined-basic" label="Zip code" variant="outlined" />
                                </FormControl><br />
                                <p><b>Bank Account Holder Name</b></p>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="State/Province/Region" variant="outlined" />
                                </FormControl>
                                <p><b>IBAN</b></p>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Up to 34 characters" variant="outlined" />
                                </FormControl>
                                <p><b>BIC</b></p>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="8 or 11 characters" variant="outlined" />
                                </FormControl>
                                <p><b>Bank Account Currency</b></p>
                                <FormControl className="form-control mb-4">
                                <InputLabel>Choose a currency</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div><hr />
                            <div className="button">
                            <button className="btn btn-light p-2 m-3">Cancel</button>
                            <button className="btn btn-primary">Verify Bank Account</button>
                        </div>
                      </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Bankaccount;
