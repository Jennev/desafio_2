const SocialButton = ({ icono }) => {
    return (
        <>
            <button style={{ border: 0, background: "none", cursor: "pointer" }}>
                <i
                    style={{ fontSize: "20px" }}
                    className={`border border-dark rounded-circle p-2 fa-brands fa-${icono} `}
                ></i>
            </button>
        </>
    );
};

export default SocialButton;
