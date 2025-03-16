
import React from 'react';
import { Instagram, LinkedIn, GitHub, Telegram } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#000", color: "#fff", padding: "20px 0", textAlign: "center" }}>
            <div style={{ marginBottom: "10px" }}>
                <span
                    style={{
                        display: "inline-block",
                        backgroundColor: "#333",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "14px",
                        cursor: "pointer",
                    }}
                >
                    English (US)
                </span>
            </div>
            <div style={{ fontSize: "14px", marginBottom: "20px" }}>
                MARN-BioInf © 2025
                <a
                    href="/manage-cookies"
                    style={{ color: "#fff", textDecoration: "none", marginLeft: "10px" }}
                >
                    Manage Cookies
                </a>
            </div>
            <div style={{ fontSize: "24px", display: "flex", justifyContent: "center", gap: "15px" }}>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                    <Instagram />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                    <LinkedIn />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                    <GitHub />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                    <Telegram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;