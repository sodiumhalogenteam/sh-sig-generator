import { useFormik } from "formik";
import Sig from "./Sig";
import { renderToString } from "react-dom/server";

const SigGenerator = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      cell: "",
      imgUrl: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h2>SH Signature Creator</h2>
        <p>Please fill out the form</p>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name *</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="cell">Cellphone number</label>
        <input
          id="cell"
          name="cell"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.cell}
          pattern="[+]{1}[0-9]{11,14}"
        />
        <label htmlFor="cell">Image URL</label>
        <input
          id="imgUrl"
          name="imgUrl"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.imgUrl}
        />
      </form>
      <div className="right">
        <Sig
          className="sig"
          firstName={formik.values.firstName}
          lastName={formik.values.lastName}
          title={formik.values.title}
          cell={formik.values.cell}
          email={formik.values.email}
          imgUrl={formik.values.imgUrl}
        />
        <textarea
          value={renderToString(
            <Sig
              firstName={formik.values.firstName}
              lastName={formik.values.lastName}
              title={formik.values.title}
              cell={formik.values.cell}
              email={formik.values.email}
              imgUrl={formik.values.imgUrl}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SigGenerator;
