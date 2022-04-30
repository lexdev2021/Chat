export const UI = {

    APPLICATION: document.getElementById('chat'),
    BTN_SETTINGS: document.getElementById('settings_btn'),
    CLOSE_WINDOW: document.querySelector('.popup__exit'),
    INPUT: document.querySelector('.popup__input'),

    TEMPLATE: {
        SETTINGS:      document.getElementById('popup_settings_template'),
        AUTHORIZATION: document.getElementById('authorization_form'),
        VERIFICATION:  document.getElementById('popup_verification_template'),
    },

    MESSAGE: {
        FORM: document.getElementById('send_message_form'),
        INPUT: document.getElementById('message_text'),
        TEMPLATE: document.getElementById('message_template'),
    },

    CHAT: {
        WINDOW: document.getElementById('chat_window'),
    }
}