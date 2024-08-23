import React from 'react';
import styles from './contactSection.module.css';
import icon_gitHub from '../../assests/icons/icon-github.svg';
import icon_linkedIn from '../../assests/icons/icon-linkedin.svg';
import icon_instagram from '../../assests/icons/icon-instagram.svg';
import {useForm, SubmitHandler} from "react-hook-form";
import emailjs from '@emailjs/browser';


type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactSection = () => {

    const {
        register, handleSubmit, reset,
        formState: {errors}
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        emailjs.send(
            'svetlana_denisyuk',
            'template_leclrdf',
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            },

            'aLSzi8WAgEdVCKs-7'
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully');
            reset();
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message');
        });
    };

    return (
        <div className={styles.contactSection}>
            <div className={styles.contactSection_info}>
                <div className={styles.contactSection_email_main}>
                    <h2 className={styles.contactSection_title}>Let's Connect</h2>
                    <p className={styles.contactSection_email}>
                        Say hello at <a href="mailto:svetlana.denisyuk@gmail.com">svetlana.denisyuk@gmail.com</a>
                    </p>
                    <p className={styles.contactSection_email}>
                        For more info, here's my <a href="/CV_Svetlana_Denisyuk_Frontend_Developer.pdf" target="_blank"
                                                    rel="noopener noreferrer">CV</a>
                    </p>
                    <div className={styles.contactSection_socials}>
                        <div className={styles.wrapper_icon}>
                            <a href="https://www.linkedin.com/in/sveta-denisyuk/" target="_blank"
                               rel="noopener noreferrer">
                                <img src={icon_linkedIn} alt='logo linkedIn'/>
                            </a>
                        </div>
                        <div className={styles.wrapper_icon}>
                            <a href="https://github.com/SvetaDen" target="_blank" rel="noopener noreferrer">
                                <img src={icon_gitHub} alt='logo github'/>
                            </a>
                        </div>
                        <div className={styles.wrapper_icon}>
                            <a href="https://www.instagram.com/den_sveta/" target="_blank" rel="noopener noreferrer">
                                <img src={icon_instagram} alt='logo instagram'/>
                            </a>
                        </div>
                    </div>
                </div>
                <p className={styles.createdBy}>© 2024 Sveta Denisiuk</p>
            </div>

            <div className={styles.contactSection_formWrapper}>
                <form className={styles.contactSection_form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.contactSection_formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            {...register('name', {required: 'Name is required'})}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={styles.contactSection_formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className={styles.contactSection_formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            {...register('subject', {required: 'Subject is required'})}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                    <div className={styles.contactSection_formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            {...register('message', {required: 'Message is required'})}
                        />
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                    <button type="submit" className={styles.contactSection_submitButton}>Submit</button>
                </form>
            </div>
            <p className={`${styles.createdBy} ${styles.min}`}>© 2024 Sveta Denisiuk</p>
        </div>
    );
};

export default ContactSection;