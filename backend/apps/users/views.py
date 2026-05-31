from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated

from .serializers import (
    LoginSerializer,
    RegisterSerializer,
    MeSerializer,
)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

# IsAuthenticated ist hier sehr wichtig. Sensible Daten sollen NUR accessable sein, wenn der nutzer richtig Authentifiziert ist!!
class MeView(generics.RetrieveAPIView):
    serializer_class = MeSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        return Response({
            "test" : "Hallo"
        }, status=status.HTTP_200_OK)