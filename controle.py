import serial

ser = serial.Serial('COM4', 115200)
data = ser.readline()
data += ser.readline()
print(data)
ser.write(str.encode('help'))
data = ser.readline()
print(data)