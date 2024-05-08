import Layout from "../layouts"
import ChildComponents from "../components/ChildComponents";

export default function ContextPage() {

  console.log("renderizado del PADRE")

  return (
    <Layout>
      <div className="w-full flex-col p-2 flex items-center justify-center">
        <h3>Context Page</h3>
        <ChildComponents />
      </div>
    </Layout>
  );
}
