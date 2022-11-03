import Client from "./Client";
import Notify from "./Notify";


const client = new Client();

const notification = new Notify(client);


notification.sendEmail();