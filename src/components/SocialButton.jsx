

const SocialButton = ({ icono }) => {
    return (
        <>
            <button style={{ border: 0, background: "none", cursor: "pointer" }}>
            <div className="d-flex gap-3">
                    <img width="50" height="50" className="border border-dark rounded-circle p-1" src="https://img.icons8.com/ios-glyphs/60/facebook-new.png" alt="facebook-new" />
                    <img width="50" height="50" className="border border-dark rounded-circle p-1" src="https://img.icons8.com/ios-glyphs/60/github.png" alt="github" />
                    <img width="50" height="50" className="border border-dark rounded-circle p-1" src="https://cdn.icon-icons.com/icons2/509/PNG/512/linkedin_icon-icons.com_49942.png" alt="linkedin-circled--v1"/>                </div>

            </button>
        </>
    );
};

export default SocialButton;
