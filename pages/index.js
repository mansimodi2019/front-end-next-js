export default function index() {
  return (
    <>
      <span>Redirect to Recipes</span>
    </>
  );
}

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/recipes",
      permanent: true,
    },
  };
};
