import axios from "axios";
import moment from "moment";

const server_url = "http://xpediolive.com:5660/server_api";
const default_project_id = "cherylin";
const default_client_id = "83d48f16-c6e8-4913-824a-7f90ab38a761";

export async function callServerApi(
  api_name,
  data_jo,
  clause_jo,
  project_id,
  client_id
) {
  let payload = {
    api: api_name,
    data: data_jo,
    clause: clause_jo,
  };
  if (!project_id) payload.project_id = default_project_id;
  if (!client_id) payload.client_id = default_client_id;

  let res;
  console.log(server_url);
  console.log(payload);
  res = await axios.post(server_url, payload);
  return res.data;
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (err) => {
      reject(err);
    };
  });
}

export function updateAudit(rec, acc) {
  let audit = [];
  if (Object.keys(rec).includes("audit_info")) {
    audit = rec.audit_info;
  }
  audit.push({
    author: acc.first_name + " " + acc.last_name,
    phone: acc.phone,
    audit_date: moment().format("YYYY-MM-DD HH:mm"),
  });
  return audit;
}
