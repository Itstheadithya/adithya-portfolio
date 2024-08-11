import React from "react";
import styles from './CertificatesStyles.module.css'
import java from '../../assets/javacourse.png';
import saylor from '../../assets/softwareeng.png';
import ndg from '../../assets/ndglinux.png';
import ibm from '../../assets/IBMEmerging.png';
import iot from '../../assets/IntotoIoT.png';
import aml from '../../assets/AWSml.png';
import cloud from '../../assets/awscloud.png';
import DB from '../../assets/DB.png';
import clang from '../../assets/clang.png';
import python from '../../assets/pythonlang.png';
import ccna1 from '../../assets/ccna1.png';
import ccna2 from '../../assets/ccna2.png';
import ccna3 from '../../assets/ccna3.png';
import forcy from '../../assets/forticyber.png';
import CertificateCard from "../../common/CertificateCard";

function Certificates(){
    return (
        <section id='certificates' className={styles.container}>
            <h1 className="sectionTitle">Certificates</h1>
            <div className={styles.certificatesContainer}>
                <CertificateCard src={java} link={'https://drive.google.com/file/d/1lScXjmUIi-GO8ZNku2SXTgO_QNhVRyzH/view?usp=sharing'}
                    h3="Java Programming"
                    p='Award of course completion by oracle academy'
                />
                <CertificateCard src={DB} link={'https://drive.google.com/file/d/1z4fAu2oj00PZNlzivldJkGN6BQkAgkwN/view?usp=sharing'}
                    h3="Database Programming with SQL"
                    p='Award of course completion by oracle academy'
                />
                <CertificateCard src={clang} link={'https://drive.google.com/file/d/1KwdG9MWPrds7x1eYkvax2iLxctTLLEUO/view?usp=sharing'}
                    h3="Programming Essentials in C"
                    p='C Programming course, provided by Cisco Networking Academy®'
                />
                <CertificateCard src={python} link={'https://drive.google.com/file/d/1KwdG9MWPrds7x1eYkvax2iLxctTLLEUO/view?usp=sharing'}
                    h3="Programming Essentials in Python"
                    p='Programming Essentials in Python course, provided by Cisco Networking Academy®'
                />
                <CertificateCard src={saylor} link={'https://drive.google.com/file/d/1RShPW4BPRRbELMQYxDCF5VDKdjh5wDFW/view?usp=sharing'}
                    h3="CS302: Software Engineering"
                    p='Software Enineering certificate by saylor academy'
                />
                <CertificateCard src={ndg} link={'https://drive.google.com/file/d/1x7SRZn96BSJ6kEgJnJU2I-tt0TR0Rg-D/view?usp=sharing'}
                    h3="NDG Linux"
                    p='NDG Linux Unhatched course in the Cisco Networking Academy'
                />
                <CertificateCard src={ccna1} link={'https://drive.google.com/file/d/15kd8Lya6iGWbPa4J95t1ccELq8euxhco/view?usp=sharing'}
                    h3="CCNA-1"
                    p='Introduction to Networks'
                />
                <CertificateCard src={ccna2} link={'https://drive.google.com/file/d/1wmBW5u4lXO6RB04CtMyPV1KNBgAif1um/view?usp=sharing'}
                    h3="CCNA-2"
                    p='Switching, Routing, and Wireless Essentials'
                />
                <CertificateCard src={ccna3} link={'https://drive.google.com/file/d/1cNogC-gEEDGmhbliOE7KldujCqdHxfDQ/view?usp=sharing'}
                    h3="CCNA-3"
                    p='Enterprise Networking, Security, and Automation'
                />
                <CertificateCard src={forcy} link={'https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1723316352/1506769955AP.pdf'}
                    h3="Fundamentals Cybersecurity"
                    p='Fortinet Certified Fundamentals Cybersecurity'
                />
                <CertificateCard src={ibm} link={'https://www.credly.com/badges/5b5b9021-74a6-4a40-8be1-ba641cbe4c59'}
                    h3="Explore Emerging Tech"
                    p="Understanding of six emerging technologies that power today's jobs"
                />
                <CertificateCard src={iot} link={'https://drive.google.com/file/d/1DuMD3yORnjWxUeUJNzXFOqB_fBF02ouk/view?usp=sharing'}
                    h3="Introduction to IoT"
                    p='Introductory knowledge of IoT and has an understanding how it enables the Digital Transformation'
                />
                <CertificateCard src={aml} link={'https://drive.google.com/file/d/1bHyi1yyZ1OqSq9Hl0FEiQnetprBDTnWZ/view?usp=sharing'}
                    h3="Machine Learning Foundations"
                    p='AWS Academy Graduate - AWS Academy Machine Learning Foundations'
                />
                <CertificateCard src={cloud} link={'https://drive.google.com/file/d/1kgnYKwmOwV1ItEgiRos77Nad7gDf3L41/view?usp=sharing'}
                    h3="Cloud Foundations"
                    p='AWS Academy Graduate - AWS Academy Cloud Foundations'
                />
            </div>
        </section>
    );
}

export default Certificates;