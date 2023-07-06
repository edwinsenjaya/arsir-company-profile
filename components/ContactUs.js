import styles from "@/styles/contact-us.module.css";

export default function ContactUs() {
  function sendEmail() {
    console.log(document.getElementById("name").value);
    Email.send({
      SecureToken: "35ce02f4-5a4a-495b-8c6b-1343204a1ec0",
      //   Host: "smtp.elasticemail.com",
      To: "edwin.senjaya@digdayatech.id",
      From: document.getElementById("name").value,
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
  }

  return (
    <section className={styles["contact-us-container"]}>
      <form
        className={styles["form-container"]}
        onSubmit={(e) => {
          e.preventDefault();
          const response = sendEmail();
          console.log(response);
        }}
      >
        <input
          id="name"
          type="text"
          className={styles.name}
          placeholder="Full Name"
        ></input>
        <input type="submit" className={styles.submit} />
      </form>
      <section className={styles["image-container"]}></section>
    </section>
  );
}
