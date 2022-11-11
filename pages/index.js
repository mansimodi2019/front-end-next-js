export default function index() {
  return <></>;
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/recipes",
      permanent: true,
    },
  };
};
