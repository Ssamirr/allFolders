from django import forms
# from accounts.tools.validators import validate_phone_num
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password, password_validators_help_text_html
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UsernameField , PasswordChangeForm , \
    PasswordResetForm , SetPasswordForm 

User = get_user_model()


class LoginForm(AuthenticationForm):
    username = UsernameField(widget=forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': _('Email'),
                'autofocus': True
            }),)
    password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={
            'autocomplete': 'new-password',
            'class': 'form-control',
            'placeholder': 'Password',
            }), max_length=30)


class CustomUserCreationForm(UserCreationForm):
    CHOICES=(('read','Reader'),
            ('write','Author'))
    password1 = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'autocomplete': 'new-password',
            'class': 'form-control',
            'placeholder': 'Password',
            }),
        help_text=password_validators_help_text_html(),
    )
    password2 = forms.CharField(
        label=_("Password confirmation"),
        widget=forms.PasswordInput(attrs={
            'autocomplete': 'new-password',
            'class': 'form-control',
            'placeholder': 'confirm password',
            }),
        strip=False,
        help_text=_("Enter the same password as before, for verification."),
    )
    is_author = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect())

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password1',
            'password2',
            'first_name',
            'last_name',
            'image',
            'bio',
            'is_author',
        )

        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('username')
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': _('Email')
            }),
            'password1': forms.PasswordInput(attrs={
                'class': 'form-control',
                'placeholder': _('Password')
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('first name')
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('last name')
            }),
            'bio': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': _('biography')
            }),
        }


class CustomUserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'image',
            'bio',
        )

        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('username')
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('first name')
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': _('last name')
            }),
            'bio': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': _('biography')
            }),
        }

class CustomPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(
        label=_("Old password"),
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'current-password', 
        'autofocus': True,
        'class': 'form-control',
        'placeholder': 'Old Password',
        }),
    )
    new_password1 = forms.CharField(
        label=_("New password"),
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'current-password',
        'class': 'form-control',
        'placeholder': 'New Password',
            }),
    )
    new_password2 = forms.CharField(
        label=_("Confirm New password"),
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'current-password',
        'class': 'form-control',
        'placeholder': 'Confirm New Password',
        }),
    )

class CustomPasswordResetForm(PasswordResetForm):
    email = forms.EmailField(
        label=_("Email"),
        max_length=254,
        widget=forms.EmailInput(attrs={
            'autocomplete': 'email',
            'class': 'form-control',
            'placeholder': _('Email'),
        })
    )

class ResetPasswordForm(SetPasswordForm):
    new_password1 = forms.CharField(
        label=_("New password"),
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password',
        'class': 'form-control',
        'placeholder': 'New Password',}),
        strip=False,
        help_text=password_validators_help_text_html(),
    )
    new_password2 = forms.CharField(
        label=_("New password confirmation"),
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password',
        'class': 'form-control',
        'placeholder': 'New password confirmation',}),
    )


# class RegisterForm(forms.ModelForm):
#     confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': 'confirm password'
#             }),)

#     class Meta:
#         model = User
#         # fields = '__all__'
#         fields = (
#             'username',
#             'email',
#             'password',
#             'confirm_password',
#             'first_name',
#             'last_name',
#             'image',
#             'bio',
#         )
#         widgets = {
#             'username': forms.TextInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('username')
#             }),
#             'email': forms.EmailInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('Email')
#             }),
#             'password': forms.PasswordInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('Password')
#             }),
#             'first_name': forms.TextInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('first name')
#             }),
#             'last_name': forms.TextInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('last name')
#             }),
#             'bio': forms.Textarea(attrs={
#                 'class': 'form-control',
#                 'placeholder': _('biography')
#             }),
#         }

#     def clean(self):
#         cleaned_data = super().clean()
#         password = cleaned_data.get('password')
#         confirm_password  = cleaned_data.get('confirm_password')

#         if password != confirm_password :
#             raise forms.ValidationError(
#                 "Password and Confirm Password does not match"
#             )
#         return cleaned_data

#     def clean_password(self):
#         password = self.cleaned_data.get('password')
#         try:
#             validate_password(password, self.instance)
#         except forms.ValidationError as error:
#             self.add_error('password', error)
#         return password