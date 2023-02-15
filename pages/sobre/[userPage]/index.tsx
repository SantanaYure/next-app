import { useRouter } from "next/router";
const SobreItem = () => {
  const router = useRouter();
  const { userPage } = router.query;

  return (
    <>
      <div>Página de {userPage}.</div>
    </>
  );
};
export default SobreItem;
