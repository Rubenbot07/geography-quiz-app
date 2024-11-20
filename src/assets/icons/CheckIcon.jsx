const CheckIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Esto permite pasar props adicionales, como tamaño o color
    >
      <rect width="20" height="20" rx="10" fill="#E2E4F3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5ZM14.1016 8.14018C14.4551 7.71591 14.3978 7.08534 13.9735 6.73178C13.5492 6.37821 12.9187 6.43554 12.5651 6.85982L9.80049 10.1774C9.45377 10.5934 9.25886 10.8238 9.10324 10.9653L9.0973 10.9707L9.09089 10.9659C8.92309 10.839 8.70812 10.6272 8.32516 10.2443L7.37377 9.29289C6.98325 8.90237 6.35008 8.90237 5.95956 9.29289C5.56904 9.68342 5.56904 10.3166 5.95956 10.7071L6.91095 11.6585L6.95178 11.6993C7.27827 12.026 7.59236 12.3402 7.8846 12.5611C8.21197 12.8087 8.64069 13.0415 9.1901 13.0165C9.73951 12.9916 10.1454 12.721 10.449 12.4448C10.72 12.1983 11.0044 11.8569 11.3 11.5021L11.3369 11.4577L14.1016 8.14018Z"
        fill="#3E9FFF"
      />
    </svg>
  );
};

export default CheckIcon;