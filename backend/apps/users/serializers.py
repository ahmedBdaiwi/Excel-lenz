from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from rest_framework.utils.serializer_helpers import ReturnDict, ReturnList
from rest_framework.fields import ErrorDetail

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise ValidationError(
                ErrorDetail(
                    "Benutzername existiert bereits.",
                    code="699"
                )
            )
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise ValidationError(
                ErrorDetail(
                    "E-Mail bereits registriert.",
                    code="700"
                )
            )
        return value

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
    

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        user = authenticate(
            username=attrs["username"],
            password=attrs["password"]
        )

        if not user:
            raise serializers.ValidationError(
                "Ungültige Anmeldedaten"
            )

        attrs["user"] = user
        return attrs
    

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
        )