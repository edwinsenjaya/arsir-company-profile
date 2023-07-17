import styles from "@/styles/contact-us.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  function sendEmail() {
    Email.send({
      SecureToken: "35ce02f4-5a4a-495b-8c6b-1343204a1ec0",
      To: "arsirarchitect@gmail.com",
      From: "arsirarchitecture@gmail.com",
      Subject: "Customer Inquiry - " + document.getElementById("name").value,
      Body:
        "Name : " +
        document.getElementById("name")?.value +
        "<br /><br />  Phone : " +
        document.getElementById("phone")?.value +
        "<br /><br />  Email : " +
        document.getElementById("email")?.value +
        "<br /><br />  Subject : " +
        document.getElementById("subject")?.value +
        "<br /><br />  Message : " +
        document.getElementById("message")?.value,
    }).then(() => alert("Message sent! We will contact you soon."));
  }

  return (
    <section className={styles["contact-us-container"]}>
      <section className={styles["content-container"]}>
        <section className={styles["info-container"]}>
          <section className={styles["address-container"]}>
            <h6 className={styles.title}>Our Studio</h6>
            <h6 className={styles.text}>Jl. Sriwijaya No.10</h6>
            <h6 className={styles.text}>Bandung, Jawa Barat</h6>
            <h6 className={styles.text}>Indonesia</h6>
          </section>
          <section className={styles["contact-container"]}>
            <h6 className={styles.title}>Contact us</h6>
            <h6 className={styles.text}>
              Instagram:{" "}
              <Link
                href="https://www.instagram.com/arsirarchitect/"
                target="_blank"
                className={`${styles.text} ${styles.link}`}
              >
                arsirarchitect
              </Link>
            </h6>
            <h6 className={styles.text}>
              Email:{" "}
              <Link
                href="mailto:arsirarchitect@gmail.com"
                target="_blank"
                className={`${styles.text} ${styles.link}`}
              >
                arsirarchitect@gmail.com
              </Link>
            </h6>
            <h6 className={styles.text}>
              Whatsapp:{" "}
              <Link
                href="https://wa.me/6281389007566"
                target="_blank"
                className={`${styles.text} ${styles.link}`}
              >
                +62 813 8900 7566
              </Link>
            </h6>
          </section>
        </section>
        <form
          className={styles["form-container"]}
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
          }}
        >
          <h6 className={styles["form-title"]}>Leave us a message</h6>
          <div className={styles["name-phone"]}>
            <input
              id="name"
              type="text"
              className={`${styles.name} ${styles.input}`}
              placeholder="Full Name"
            ></input>
            <input
              id="phone"
              type="text"
              className={`${styles.phone} ${styles.input}`}
              placeholder="Phone Number"
            ></input>
          </div>
          <input
            id="email"
            type="text"
            className={styles.input}
            placeholder="Email"
          ></input>
          <input
            id="subject"
            type="text"
            className={styles.input}
            placeholder="Subject"
          ></input>
          <textarea
            id="message"
            placeholder="Message"
            className={`${styles.message} ${styles.input}`}
          ></textarea>
          <div className={styles["submit-container"]}>
            <input type="submit" className={styles.submit} value="Send" />
          </div>
        </form>
      </section>
      <section className={styles["image-container"]}>
        <Image
          src="/contact-us/contact-us.webp"
          alt="contact-us.webp"
          width={300}
          height={400}
          className={styles.image}
        />
      </section>
    </section>
  );
}
