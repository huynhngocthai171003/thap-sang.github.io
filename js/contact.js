const contactForm = document.getElementById('contact_form');

                                contactForm.addEventListener('submit', function (event) {
                                    event.preventDefault();

                                    const fullName = document.getElementById('name').value;
                                    const email = document.getElementById('email').value;
                                    const subject = document.getElementById('subject').value;
                                    const message = document.getElementById('message').value;

                                    // Kiểm tra định dạng email
                                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                                    if (!emailRegex.test(email)) {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Lỗi',
                                            text: 'Email không hợp lệ!',
                                        });
                                        return;
                                    }

                                    // Kiểm tra tất cả các trường không được bỏ trống (bao gồm cả dấu cách)
                                    if (fullName.trim() === '' || subject.trim() === '' || message.trim() === '') {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Lỗi',
                                            text: 'Vui lòng điền đầy đủ thông tin!',
                                        });
                                        return;
                                    }

                                    // Nếu tất cả kiểm tra thành công, gửi form
                                    // contactForm.submit();
                                    Email.send({
                                        Host: "smtp.gmail.com",
                                        Username: "clbts130717@gmail.com",
                                        Password: "wolkukwdxlhdrxsa",
                                        To: 'clbts130717@gmail.com',
                                        From: email,
                                        Subject: "CLB Thắp Sáng - ",
                                        Body: "body"
                                        // Subject: "CLB Thắp Sáng - " + subject + " - " + fullName,
                                        // Body:
                                        //     "<html><body style=''>"
                                        //     + "<div style='margin-left:20px'>"
                                        //     + "<p><b>Chào</b> - <span style='font-weight: bold;'>CLB Thắp Sáng</span></p>"
                                        //     + "<p>Tôi tên là <span style='font-weight: bold;'>" + fullName + "</span>. </p>"
                                        //     + "<p> " + message + ".</p>"
                                        //     + "<p> Mong nhận được phản hồi từ CLB.</p>"
                                        //     + "<b>Trân trọng,</b></br>"
                                        //     + "<div> " + fullName + " </div>"
                                        //     + "<div><i> " + email + "</i></div>"

                                        //     + "</div>"
                                        //     + "</body></html>"
                                    }).then(
                                        message => {
                                            console.log(message);
                                            // Kiểm tra kết quả gửi email và hiển thị thông báo tương ứng
                                            if (message === 'OK' || message === 'success') {
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Thành công',
                                                    text: 'Email đã được gửi thành công!',
                                                });
                                            } else {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Lỗi',
                                                    text: 'Email không thể được gửi!',
                                                });
                                            }
                                        }
                                    );


                                });