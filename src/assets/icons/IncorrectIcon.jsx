const IncorrectIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Para que puedas pasar props adicionales como tamaño o color
    >
      <rect width="20" height="20" rx="10" fill="#E2E4F3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10ZM5.95956 14.0404C5.56904 13.6499 5.56904 13.0168 5.95956 12.6262L8.58579 10L5.95956 7.37377C5.56903 6.98325 5.56904 6.35008 5.95956 5.95956C6.35008 5.56904 6.98325 5.56903 7.37377 5.95956L10 8.58579L12.6262 5.95956C13.0168 5.56903 13.6499 5.56904 14.0404 5.95956C14.431 6.35008 14.431 6.98325 14.0404 7.37377L11.4142 10L14.0404 12.6262C14.431 13.0168 14.431 13.6499 14.0404 14.0404C13.6499 14.431 13.0168 14.431 12.6262 14.0404L10 11.4142L7.37377 14.0404C6.98325 14.431 6.35008 14.431 5.95956 14.0404Z"
        fill="#DD524C"
      />
    </svg>
  );
};

export default IncorrectIcon;