<template>
  <div class="container">
    <base-dialog v-if="!formIsValid">
      <template #header>
        <h3>Заполните все обязательные поля.</h3>
      </template>
      <template #default>
        <p>Пожалуйста, убедитесь, что вы ввели все данные правильно!</p>
      </template>
      <template #actions>
        <button class="dialog-button" @click="confirmError">Okay</button>
      </template>
    </base-dialog>
    <!-- PRODUCT INFO -->

    <div class="product-info">
      <div class="fixed-container">
        <h3>Вы покупаете</h3>
        <div class="product-info-container">
          <div class="product">
            <div class="media">
              <img
                class="media-object"
                src="https://store.payproglobal.com/Content/img/upd/product-logo.png"
                alt="Antony Test"
              />
              <span class="media-name">Antony Test</span>
            </div>
            <div class="price">
              <span class="price">2,769.92 UAH</span>
            </div>
          </div>
          <div class="total">
            <div class="total-1">
              <span>ИТОГО:</span>
            </div>
            <div class="total-2">
              <span>2,769.92 UAH</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAYMENT INFO -->

    <div class="payment-info-container">
      <div class="sub-header">
        <h2>Информация Об Оплате</h2>
      </div>

      <!-- THE FORM -->

      <div class="client-info">
        <form @submit.prevent="submitForm">
          <div>
            <div class="form-control checkbox">
              <input
                class="company"
                id="company"
                name="company"
                type="checkbox"
                v-model="corporatePurchase"
              />
              <label for="company">Корпоративная покупка</label>
            </div>

            <div v-if="onCorporatePurchase" class="form-control">
              <input
                type="text"
                class="form-control-sm"
                id="company-name"
                name="billing-company"
                placeholder="Название компании *"
                required=""
                v-model.trim="companyName"
              />
            </div>

            <div class="form-control" :class="{ invalid: !userEmail.isValid }">
              <input
                type="email"
                class="form-control-sm"
                id="email"
                name="billing-email"
                placeholder="Адрес электронной почты *"
                v-model.trim="userEmail.val"
              />
              <p class="error-message" v-if="!userEmail.isValid">
                Пожалуйста, укажите адрес электронной почты правильно.
              </p>
            </div>

            <div class="form-control">
              <div
                class="form-control left"
                :class="{ invalid: !userName.isValid }"
              >
                <input
                  type="text"
                  class="form-control-sm"
                  id="firstname"
                  name="billing-first-name"
                  placeholder="Имя *"
                  v-model.trim="userName.val"
                />
                <p class="error-message" v-if="!userName.isValid">
                  Имя является обязательным полем.
                </p>
              </div>

              <div
                class="form-control"
                :class="{ invalid: !userSurname.isValid }"
              >
                <input
                  type="text"
                  class="form-control-sm"
                  id="lastname"
                  name="billing-last-name"
                  placeholder="Фамилия *"
                  v-model.trim="userSurname.val"
                />
                <p class="error-message" v-if="!userSurname.isValid">
                  Фамилия является обязательным полем.
                </p>
              </div>
            </div>

            <div class="form-control" :class="{ invalid: !street.isValid }">
              <input
                type="text"
                class="form-control-sm"
                id="address"
                name="billing-address"
                placeholder="Полный адрес *"
                v-model.trim="street.val"
              />
              <p class="error-message" v-if="!street.isValid">
                Пожалуйста, укажите адрес для выставления счета.
              </p>
            </div>

            <div class="form-control">
              <div
                class="form-control left"
                :class="{ invalid: !city.isValid }"
              >
                <input
                  type="text"
                  class="form-control-sm"
                  id="city"
                  name="billing-city"
                  placeholder="Город *"
                  v-model.trim="city.val"
                />
                <p class="error-message" v-if="!city.isValid">
                  Пожалуйста, укажите город для выставления счета.
                </p>
              </div>

              <div class="form-control">
                <input
                  type="text"
                  class="form-control-sm"
                  id="zip"
                  placeholder="Индекс "
                  name="billing-zip"
                  data-action="BillingZipChange"
                  v-model.trim="index"
                />
              </div>
            </div>

            <div class="form-control">
              <select
                id="country"
                name="country"
                class="form-control-sm"
                aria-placeholder=""
                v-model="country"
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div
              class="form-control"
              :class="{ invalid: !phoneNumber.isValid }"
            >
              <input
                type="number"
                class="form-control-sm"
                id="phone"
                name="billing-contact-phone"
                placeholder="Номер телефона "
                v-model.trim="phoneNumber.val"
              />
              <p class="error-message" v-if="!phoneNumber.isValid">
                Пожалуйста, введите номер телефона правильно.
              </p>
            </div>

            <div class="form-control checkbox">
              <input
                class="company"
                id="company"
                name="company"
                type="checkbox"
                v-model="license"
              />
              <label for="company">Лицензия для другого лица.</label>
            </div>

            <div class="form-control" v-if="onLicense">
              <input
                type="text"
                class="form-control-sm"
                id="license-firstname"
                name="billing-first-name-license"
                placeholder="Имя лицензиата *"
                required=""
                v-model.trim="licenseName"
              />
            </div>

            <div class="form-control" v-if="onLicense">
              <input
                type="email"
                class="form-control-sm"
                id="license-email"
                name="billing-email-license"
                placeholder="Email лицензиата *"
                required=""
                v-model.trim="licenseEmail"
              />
            </div>
          </div>

          <!-- PAYMENT INFO -->

          <div class="payment-info">
            <div class="form-control">
              <select
                class="form-control-sm"
                id="payment"
                v-model="wayOfPayment"
              >
                <option>Кредитная/Дебетовая Карта</option>
                <option>PayPal</option>
                <option>Денежный перевод</option>
                <option>Заказ на закупку</option>
              </select>
            </div>

            <div
              v-if="wayOfPayment === 'Кредитная/Дебетовая Карта'"
              class="form-control"
              :class="{ invalid: !cardNumber.isValid }"
            >
              <input
                data-hj-masked=""
                type="number"
                class="form-control-sm"
                id="cardnum"
                name="cc-number"
                placeholder="Номер карты*"
                v-model.trim="cardNumber.val"
              />
              <p class="error-message" v-if="!cardNumber.isValid">
                Номер кредитной карты является обязательным полем.
              </p>
            </div>

            <div
              v-if="wayOfPayment === 'Кредитная/Дебетовая Карта'"
              class="form-control-section"
            >
              <div class="credit-card-container form-control">
                <div class="credit-container">
                  <div class="form-control">
                    <select class="form-control-sm" id="month" v-model="month">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>

                  <div
                    v-if="wayOfPayment === 'Кредитная/Дебетовая Карта'"
                    class="form-control right"
                  >
                    <select class="form-control-sm" id="year" v-model="year">
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                      <option>32</option>
                      <option>33</option>
                      <option>34</option>
                      <option>35</option>
                      <option>36</option>
                      <option>37</option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                    </select>
                  </div>
                </div>

                <div
                  v-if="wayOfPayment === 'Кредитная/Дебетовая Карта'"
                  class="form-control"
                  :class="{ invalid: !securityCode.isValid }"
                >
                  <input
                    type="number"
                    class="form-control-sm"
                    id="cardnum"
                    name="cc-number"
                    placeholder="Код безопасности*"
                    v-model.trim="securityCode.val"
                  />
                </div>
              </div>
            </div>

            <div v-if="wayOfPayment === 'PayPal'" class="form-control">
              <input
                type="text"
                class="form-control-sm"
                id="paypal"
                name="paypal-email"
                placeholder="Email адрес PayPal*"
                required=""
                v-model="payPalEmail"
              />
            </div>

            <div class="form-paragraph" v-if="wayOfPayment === 'PayPal'">
              * При нажатии на кнопку "Разместить заказ", Вы будете направлены
              на защищенную страницу PayPal для завершения заказа. <br />
              Настоятельно рекомендуется использовать Ваш проверенный PayPal
              Email. В противном случае возможны задержки при обработке заказа.
            </div>

            <div
              class="form-paragraph"
              v-if="wayOfPayment === 'Денежный перевод'"
            >
              <div class="paragraph">
                * При нажатии на кнопку "Разместить Заказ", Вы будете
                направленны на страницу с инструкциями по оплате денежным
                переводом.
              </div>
              <div>
                Денежный перевод предполагает дополнительную оплату ручной
                обработки в размере 8.18 GBP , которая будет добавленна к общей
                сумме Вашего заказа.
              </div>
            </div>

            <div
              class="form-paragraph"
              v-if="wayOfPayment === 'Заказ на закупку'"
            >
              <div class="paragraph">
                * При нажатии на кнопку "Разместить Заказ", Вы будете
                направленны на страницу с инструкциями по оплате денежным
                переводом, кредитной картой или чеком.
              </div>
              <div>
                Заказ на закупку предполагает дополнительную оплату ручной
                обработки в размере 8.18 GBP , которая будет добавленна к общей
                сумме Вашего заказа.
              </div>
            </div>

            <div class="form-control checkbox">
              <input
                class="company"
                id="company"
                name="company"
                type="checkbox"
                v-model="coupon"
              />
              <label for="company">У меня есть код купона.</label>
            </div>

            <div class="coupon-container" v-if="onCoupon">
              <input
                type="text"
                id="coupon-code"
                class="form-control-sm"
                name="coupon-code-to-add"
              />
              <span class="coupon-btn">
                <button class="btn" type="submit">Применить</button>
              </span>
            </div>
          </div>

          <hr />

          <!-- SUBMIT FORM SECTION -->

          <div class="submit-form">
            <div class="certificates">
              <div class="certificate">
                <a
                  href="https://store.payproglobal.com/Certificates/PCIDSSCompliancyStatus.html"
                >
                  <img
                    class="certificate-img"
                    src="https://store.payproglobal.com/content/f/3/1.8_abd_tpl_new/images/new-pci.png"
                    alt="certificate"
                  />
                </a>
              </div>
              <div class="certificate trusted">
                <a
                  href="https://www.trustedsite.com/verify?host=store.payproglobal.com"
                >
                  <img
                    class="certificate-img"
                    src="https://store.payproglobal.com/content/f/3/1.8_abd_tpl_new/images/TrustedSite.svg"
                    alt=""
                  />
                </a>
              </div>
              <div class="certificate">
                <a
                  href="https://seal.digicert.com/seals/popup/?tag=0pitJRnD&url=payproglobal.com&lang=en"
                >
                  <img
                    class="certificate-img"
                    src="https://store.payproglobal.com/content/f/3/1.8_abd_tpl_new/images/NortonSeal_PoweredbyDigiCert.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="submit-block">
              <button
                to="/thankyou"
                type="submit"
                name="submit-button"
                class="btn-primary"
              >
                Разместить заказ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      corporatePurchase: false,
      companyName: '',
      userEmail: {
        val: '',
        isValid: true,
      },
      userName: {
        val: '',
        isValid: true,
      },
      userSurname: {
        val: '',
        isValid: true,
      },
      street: {
        val: '',
        isValid: true,
      },
      city: {
        val: '',
        isValid: true,
      },
      index: '',
      country: 'Ukraine',
      phoneNumber: {
        val: '',
        isValid: true,
      },
      license: false,
      licenseName: '',
      licenseEmail: '',
      wayOfPayment: 'Кредитная/Дебетовая Карта',
      cardNumber: {
        val: '',
        isValid: true,
      },
      month: '01',
      year: '21',
      securityCode: {
        val: '',
        isValid: true,
      },
      payPalEmail: '',
      coupon: false,
      formIsValid: true,
    };
  },

  methods: {
    confirmError() {
      this.formIsValid = true;
    },

    validateForm() {
      this.formIsValid = true;

      if (this.userEmail.val === '') {
        this.userEmail.isValid = false;
        this.formIsValid = false;
      }

      if (this.userName.val === '') {
        this.userName.isValid = false;
        this.formIsValid = false;
      }

      if (this.userSurname.val === '') {
        this.userSurname.isValid = false;
        this.formIsValid = false;
      }

      if (this.street.val === '') {
        this.street.isValid = false;
        this.formIsValid = false;
      }

      if (this.city.val === '') {
        this.city.isValid = false;
        this.formIsValid = false;
      }

      if (this.cardNumber.val === '' || this.cardNumber.val.length != 16) {
        this.cardNumber.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.phoneNumber.val === '' ||
        this.phoneNumber.val.length < 10 ||
        this.phoneNumber.val.length > 13
      ) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.securityCode.val === '' || this.securityCode.val.length != 3) {
        this.securityCode.isValid = false;
        this.formIsValid = false;
      }
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      fetch(
        'https://payproglobal-task-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            CompanyName: this.companyName,
            UserEmail: this.userEmail.val,
            UserName: this.userName.val,
            UserSurname: this.userSurname.val,
            Address: this.street.val,
            City: this.city.val,
            Index: this.index,
            Country: this.country,
            Phonenumber: this.phoneNumber.val,
            LicenseName: this.licenseName,
            LicenseEmail: this.licenseEmail,
            WayOfPayment: this.wayOfPayment,
            Cardnumber: this.cardNumber.val,
            Month: this.month,
            Year: this.year,
            SecurityCode: this.securityCode.val,
            PayPal: this.payPalEmail,
          }),
        }
      );

      this.$router.push('/thankyou');
    },
  },
  computed: {
    onCorporatePurchase() {
      return this.corporatePurchase;
    },
    onLicense() {
      return this.license;
    },
    onCoupon() {
      return this.coupon;
    },
  },
};
</script>

<style scoped>
.dialog-button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #1473e6;
  border: 1px solid #1473e6;
  color: white;
  cursor: pointer;
  border-radius: 25px;
}

button:hover,
button:active {
  background-color: #341899;
  border-color: #341899;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.checkbox {
  display: flex !important;
  align-items: center;
}

input:focus,
input:hover,
select:focus,
select:hover {
  outline: 0;
  border-color: blue !important;
}

.credit-card-container {
  display: block;
}

@media screen and (min-width: 576px) {
  .credit-card-container {
    display: flex !important;
    flex-direction: row;
  }
}

.credit-container {
  display: flex;
  height: 32px;
  justify-content: space-around;
  align-items: center;
}

@media screen and (min-width: 576px) {
  .credit-container {
    margin-right: 10px !important;
  }
}

@media screen and (min-width: 768px) {
  .left {
    margin-right: 10px !important;
  }
}

@media screen and (min-width: 320px) {
  .right {
    margin-left: 10px !important;
  }
}

@media screen and (min-width: 768px) {
  .submit-form {
    position: relative;
    width: 628px;
  }
}

.paragraph {
  margin-bottom: 5px;
}
.form-paragraph {
  font-size: 12px;
  margin-bottom: 15px;
  line-height: 1.5;
  font-weight: 400;
  text-align: left;
}

.form-control.invalid input {
  border-color: red;
}

.certificate-img {
  margin: 0 auto;
}

.trusted {
  margin-left: 7px;
  padding-top: 5px;
}
.certificates {
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
  /* padding: 0 10px; */
}

@media screen and (min-width: 768px) {
  .certificates {
    padding: 0 110px;
  }
}

hr {
  display: block;
  margin-top: 35px;
  width: 100%;
  /* border-top: solid 1px #d6d6d6; */
  margin-bottom: 0;
  margin-right: 0;
  box-sizing: content-box;
  height: 0;
  /* overflow: visible; */
}

@media screen and (min-width: 768px) {
  hr {
    width: 628px;
  }
}

.btn-primary {
  margin: 0 auto;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 700;
  padding: 13px 42px;
  box-shadow: none;
  transition: background 200ms ease-in-out;
  width: auto;
  text-transform: inherit;
  margin: 0 auto;
  display: block;
  background: #89bf49 !important;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  color: #fff;
}

.submit-block {
  display: block;
  margin: 17px auto 30px;
}

.coupon-container {
  display: flex;
}

.payment-info {
  border-top: solid 1px #d6d6d6;
  padding-top: 10px;
  margin-top: 15px;
}

@media screen and (min-width: 768px) {
  .payment-info-container {
    padding-left: 8px;
    padding-right: 8px;
    width: 322px;
  }
}

label {
  letter-spacing: 0.03em;
  margin-left: 5px;
  font-size: 12px;
}
@media screen and (min-width: 768px) {
  .product-info {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 171px;
  }
}

.form-control-sm {
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 7px !important;
  height: 32px;
  width: 100%;
  font-size: 12px;
  padding-left: 10px !important;
  padding-right: 23px !important;
}

.container {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
}

@media screen and (min-width: 768px) {
  .container {
    width: 660px;
    max-width: 660px;
    display: flex;
    flex-direction: row-reverse;
  }
}

.product-info-container {
  background: #fff;
  border: 1px #e1e1e1 solid;
  border-radius: 7px;
}

@media screen and (min-width: 768px) {
  .fixed-container {
    position: sticky;
    top: 110px;
    width: 306px;
    /* z-index: 5; */
  }
}

@media screen and (max-width: 767px) {
  .flex-container {
    display: block;
  }
}

@media screen and (min-width: 768px) {
  .flex-container {
    display: flex !important;
    height: 32px;
  }
}

.media {
  display: flex;
  flex-direction: row;
}

.media-object {
  max-width: 44px;
  margin-right: 10px;
}

.media-name {
  display: block;
  font-weight: 700;
  width: 100px;
}

.product {
  padding: 15px 15px 10px;
  border-bottom: 1px #e1e1e1 solid;
  display: flex;
  justify-content: space-between;
}

.price {
  padding-top: 20px;
  text-align: end;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 13px 15px;
  color: #000;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  /* letter-spacing: 0.2ex; */
}

.total-2 {
  text-align: end;
}

.price {
  font-size: 14px;
}

.sub-header {
  margin: 13px 0 3px;
}

.form-control {
  margin: 0.5rem 0;
  display: block;
  align-items: center;
}

label {
  font-size: 12px;
  text-align: center;
}

h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  line-height: 19px;
  /* text-transform: capitalize; */
  font-weight: 400;
}

.btn {
  color: #fff;
  background-color: #1473e6;
  border-color: #1473e6;
  padding: 5.5px 10px;
  border-radius: 7px;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  cursor: pointer;
}

.error-message {
  padding-left: 10px;
  display: block;
  margin: 0;
  font-size: 12px;
  color: red;
}
</style>