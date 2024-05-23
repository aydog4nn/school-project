import React from "react";
import "../css/header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Pc from "../pages/Pc";

function Header() {

    const navigate = useNavigate();
   
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        
        setAnchorEl(null);
    };

    return (
        <div className="flex-row">
            <div>
                <h2 className="title" onClick={() => navigate("/home")}>MühendisIO</h2>
            </div>
            <div className="flex-row">
                <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    Bölümler
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem  onClick={handleClose}> <Link to="/pcMuh">Bilgisayar Mühendisliği</Link></MenuItem>
                    <MenuItem onClick={handleClose}>Biyomedikal Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Elektrik-Elektronik Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Gıda Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>İnşaat Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Kimya Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Maden Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Makine Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Yazılım Mühendisliği</MenuItem>
                </Menu>
                <Menu id="bilgisayar-menu">
                <MenuItem onClick={handleClose}>Elektrik-Elektronik Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Gıda Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>İnşaat Mühendisliği</MenuItem>
                    <MenuItem onClick={handleClose}>Kimya Mühendisliği</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
