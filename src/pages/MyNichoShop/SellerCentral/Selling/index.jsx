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
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Selling = () => {
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
                            <h5 class="card-title">Add your address</h5>
                            <hr/>
                            <p>Before creating your first listing, please add your address from where you will ship products sold.</p>
                            <br /><br />
                            <div className="col-5">
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
                                <InputLabel>State</InputLabel>
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
                                </FormControl><br />
                                <FormControl className="col-5 mb-4">
                                    <TextField id="outlined-basic" label="Zip code" variant="outlined" />
                                </FormControl>
                                <FormControl className="form-control mb-4">
                                    <PhoneInput
                                        country={'us'}
                                        value={''}
                                        inputStyle={{width: '100%', height: '50px'}}
                                    />
                                </FormControl>
                            </div><hr />
                            <div className="button">
                                <button className="btn btn btn-light p-2 m-3">Cancel</button>
                                <button className="btn btn btn-primary p-2 m-0">Next</button>
                            </div>
                     </div>
                  </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Selling;
