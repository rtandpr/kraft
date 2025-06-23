const {models} = require("../libs/sequelize");
const crypto = require('crypto');

const nodemailer = require("nodemailer");
// Kraftpromopr@gmail.com
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c3fe9771-322f-e344-2135-a6585f5db12c.png?w=561&dpr=2
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c0d528b5-ad70-af56-213c-ac5b70edfaae.png?w=561&dpr=2
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/1360d8e0-bbbf-6aa5-8f05-b4dd91945f24.png?w=561&dpr=2


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "promocion.kraft@gmail.com",
    pass: "wvfzyicqhmuzwlxv",
  },
});


const create = async (req, res) => {
  try {
    //faltaria enviar un email de confirmacion al usuario
    console.log("req.body", req.body);

    const email = req.body.email;

    // Validar si ya existe una persona con ese email
    // const existingUser = await models.Person.findOne({ where: { email } });

    // if (existingUser) {
    //   return res.status(200).json({
    //     success: false,
    //     message: "Ya existe un usuario registrado con ese email.",
    //   });

    //   return
    // }
    
    const newPerson = await models.Person.create(req.body);

//     let envio = `
//    <table width="100%" cellpadding="0" cellspacing="0" border="0"
//   style="background-color: #d5a228; font-family: Arial, sans-serif;">
//   <tr>
//     <td align="center">
//       <table width="600" cellpadding="0" cellspacing="0" border="0"
//         style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden;">
//         <tr>
//           <td style="padding: 0;">
//             <!-- Header image -->
//             <img
//               src="https://mcusercontent.com/fe493655bf73196cb05111254/_thumbs/f6ebbb1d-60f0-eeb2-b9a0-3336953ed5a1.png"
//               alt="Kraft Promo Header" width="600" style="display: block; width: 100%;">
//           </td>
//         </tr>

//         <tr>
//           <td
//             style="padding-top: 30px;padding-bottom: 0px; background-color: #eeb40b; text-align: center; color: #000;">
//             <b style="font-size: 30px; color: #21459a; margin-bottom: 10px;padding-bottom: 100px;">${newPerson.name.toUpperCase()}</b>
//             <br>
//             <br>

//             <p style="font-size: 18px; margin: 0 0 10px; color: #21459a;">PARA COMPLETAR TU REGISTRO,<br> DA CLICK EN EL
//               ENLACE QUE APARECE <br> A CONTINUACIÓN.</p>
//             </p>

//                         <!-- Button as image -->
//             <a href="http://sabeakraftheinz.com/validate" target="_blank"
//               style="display: inline-block; text-decoration: none;background: linear-gradient(to bottom, #eeb40b 50%, #0781b4 50%);">
//               <img
//                 src="https://mcusercontent.com/fe493655bf73196cb05111254/_thumbs/bc77faae-fb8c-9106-93a3-a531153c780c.png"
//                 alt="Confirma tu cuenta" width="650" style="margin: 0px 0;">
//             </a>


//           </td>
//         </tr>



        
//         <tr>
//           <td
//             style="padding-top: 0px;padding-bottom: 10px; background-color: #0781b4; text-align: center; color: #000;">

//             <p style="font-size: 18px; margin: 0 0 10px; color: white;background-color: #0781b4;">SI NO PUEDES DAR CLICK
//               EN EL LINK,<br>
//               COPIA Y PEGA EL SIGUIENTE VÍNCULO EN TU NAVEGADOR:</p>

//             <p style="font-size: 14px; color: #ffffff !important; text-decoration: none ; word-break: break-all;">
//              http://sabeakraftheinz.com/validate
//             </p>
//             <p style="font-size: 18px; margin: 0 0 10px; color: white;"> ¡AHORA EMPIEZA A SUBIR <br> TUS RECIBOS PARA
//               PARTICIPAR!
//             </p>
//           </td>
//         </tr>

//         <tr>
//           <td style="padding: 0;">
//             <!-- Header image -->
//             <img
//               src="https://mcusercontent.com/fe493655bf73196cb05111254/_thumbs/b686fe50-34ca-ed37-373f-0b0375d92934.png"
//               alt="Kraft Promo Header" width="600" style="display: block; width: 100%;">
//           </td>
//         </tr>
//       </table>
//     </td>
//   </tr>
// </table>
//     `;

    // const mailOptions = {
    //   from: "promocion.kraft@gmail.com",
    //   to: newPerson.email,
    //   subject: "REGISTRO",
    //   html: envio,
    // };

    // Enviar el correo
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error("Error enviando el correo:", error);
    //   } else {
    //     console.log("Correo enviado: " + info.response);
    //   }
    // });
  

    res.json({ success: true, data: newPerson });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const confirmEmail = async (req, res) => {
  try {

    const person = await models.Person.findByPk(req.body.id);

    person.confirmEmail = true;
    await person.save();

    res.json({ success: true, data: person });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const getByEmail = async (req, res) => {
  try {
    const person = await models.Person.findOne({
      where: {
        email: req.body.email,
        pass: req.body.pass
      }, 
    });

    if (!person) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, data: person });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    const deleted = await models.Person.destroy({
      where: { id: id },
    });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const generateTokenByUser = async (req, res) => {
  try {
    const person = await models.Person.findOne({
      where: {
        email: req.body.email
      }, 
    });

    // Generar un token aleatorio
    const token = crypto.randomBytes(32).toString('hex');

    console.log("token", token);
    

    person.tokenResetPass = token

    await person.save();


    let envio = `
<table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color: #d5a228; font-family: Arial, sans-serif;">
    <tr>
        <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0"
                style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden;">
                <tr>
                    <td style="padding: 0;">
                        <!-- Header image -->
                        <img src="https://mcusercontent.com/fe493655bf73196cb05111254/_thumbs/f6ebbb1d-60f0-eeb2-b9a0-3336953ed5a1.png"
                            alt="Kraft Promo Header" width="600" style="display: block; width: 100%;">
                    </td>
                </tr>

                <tr>
                    <td
                        style="padding-top: 30px;padding-bottom: 0px; background-color: #eeb40b; text-align: center; color: #000;">
                        <b
                            style="font-size: 30px; color: #21459a; margin-bottom: 10px;padding-bottom: 100px;">${person.name.toUpperCase()}</b>

                        <br>
                        <br>



                        <p style="font-size: 18px; margin: 0 0 10px;  color: #21459a;">Para recuperar tu contraseña, <br>

                            da clic en el enlace que aparece
                            <br>
                            a continuación.
                        </p>



                        <p
                            style="font-size: 18px; margin: 0 0 10px; color: #21459a; max-width: 100%; text-align: center;align-items: center; padding: 25px;">
                            <br>
                            <a href="http://sabeakraftheinz.com/pass/${token}" style="text-decoration: none; color: #21459a;">
                                http://sabeakraftheinz.com/pass/${token}

                            </a>
                            <br>
                        </p>


                        <p style="font-size: 18px; margin: 0 0 10px; color: #21459a;">
                            <br>
                            ¡Gracias!
                            <br>
                            <br>
                        </p>


                        <img src="https://mcusercontent.com/fe493655bf73196cb05111254/images/329bf661-5b84-bd18-637f-fb5de38c68af.png"
                            alt="Kraft Promo Header" width="600" style="display: block; width: 100%;">
                    </td>
                </tr>


            </table>
        </td>
    </tr>
</table>
    `;

    const mailOptions = {
      from: "promocion.kraft@gmail.com",
      to: person.email,
      subject: "RECUPERAR TU CONTRASEÑA",
      html: envio,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error("Error enviando el correo:", error);
        } else {
         console.log("Correo enviado: " + info.response);
      }
    });


    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



const resetPass = async (req, res) => {
  try {
    const { tokenResetPass , pass } = req.body;

    const person = await models.Person.findOne({
      where: {
        tokenResetPass: tokenResetPass,
      }, 
    });

    person.pass = pass
    await person.save();

    res.json({ success: true, message: person });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



const getUsers = async (req, res) => {
  try {
    const persons = await models.Person.findAll({
      attributes: {
        exclude: ['img']  // Excluir el campo 'img' (que mapea a 'img_voucher')
      }
    });

    res.json({ success: true, message: persons });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



const imgByUser = async (req, res) => {
  try {

    const { userId } = req.body;

    // Verificar si el usuario ya cargó la misma imagen
    const totalImgs = await models.Person.findAll({
      where: { id: userId },
    });

    console.log("totalImgs", totalImgs);

    res.json({ success: true, data: totalImgs });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};




module.exports = {
  create,
  confirmEmail,
  getByEmail,
  deleteUser,
  resetPass,
  generateTokenByUser,
  getUsers,
  imgByUser
};