import { formatPhoneNumber } from "./utils";
import image from "./img/sh-logo.png";

const Sig = ({ firstName, lastName, title, cell, email, imgUrl }) => {
  return (
    <table
      width="320"
      cellspacing="0"
      cellpadding="0"
      style={{ fontFamily: "Times", margin: "0px", padding: "0px" }}
    >
      <tbody>
        <tr>
          <td width="86" style={{ width: "86px", padding: "0px" }}>
            <img alt="employee" width="100px" src={imgUrl || image} />
            <br />
            <span></span>
          </td>
          <td width="10" style={{ width: "10px" }}>
            &nbsp;
          </td>
          <td valign="top" style={{ padding: "15px" }}>
            <table
              cellspacing="0"
              cellpadding="0"
              style={{
                padding: "0px",
                margin: '0px;font-family:"Lucida Grande",sans-serif',
                fontSize: "12px",
                color: "rgb(176,176,176)",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr style={{ margin: "0px", padding: "0px" }}>
                  <td
                    style={{
                      padding: "0px",
                      fontFamily: '"Lucida Grande",sans-serif',
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    <strong>
                      <a
                        href={`mailto:${email}`}
                        style={{ border: "none", color: "rgb(4,156,219)" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {`${firstName} ${lastName}`}
                      </a>
                    </strong>
                    <span style={{ color: "rgb(224,224,224)" }}>,</span>
                    &nbsp;{title}
                  </td>
                </tr>
                <tr
                  style={{
                    margin: "0px",
                    padding: "0px",
                    color: "rgb(176,164,155)",
                  }}
                >
                  <td
                    style={{
                      padding: "0px",
                      fontFamily: '"Lucida Grande",sans-serif',
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    <a
                      href="http://sodiumhalogen.com"
                      style={{ border: "none", color: "rgb(176,176,176)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      SodiumHalogen
                      <span style={{ color: "rgb(224,224,224)" }}>.</span>
                      com
                    </a>
                    <span style={{ color: "rgb(224,224,224)" }}>,</span>&nbsp;
                    <a
                      href="http://goo.gl/maps/aAlhg"
                      style={{ border: "none", color: "rgb(176,176,176)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jackson, TN
                    </a>
                  </td>
                </tr>
                <tr
                  style={{
                    margin: "0px",
                    padding: "0px",
                    color: "rgb(176,164,155)",
                  }}
                >
                  <td
                    style={{
                      padding: "0px",
                      fontFamily: '"Lucida Grande",sans-serif',
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    <a
                      href="tel:+1-347-688-7226"
                      style={{
                        color: "rgb(176,176,176)",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      O&nbsp;731.506.4535
                    </a>
                  </td>
                </tr>
                {cell && (
                  <tr
                    style={{
                      margin: "0px",
                      padding: "0px",
                      color: "rgb(176,164,155)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0px",
                        fontFamily: '"Lucida Grande",sans-serif',
                        whiteSpace: "nowrap",
                        textAlign: "left",
                      }}
                    >
                      <a
                        href={`tel:${cell}`}
                        style={{ color: "rgb(176,176,176)" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        C {formatPhoneNumber(cell)}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Sig;
