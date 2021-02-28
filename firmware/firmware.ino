/*
 Smart Termometer
*/

#include <Adafruit_MLX90614.h>

Adafruit_MLX90614 mlx = Adafruit_MLX90614();

#define N 5 //測定する回数
#define STATUS A0

void setup() {
mlx.begin();
Serial.begin(115200);
pinMode(STATUS, OUTPUT);
}

void loop() {
static float temp_bak = -1;
static int count = 0;
static float sum = 0;

float temp = mlx.readObjectTempC();
if (count) {
  sum += temp;
  if (count > N) {
    digitalWrite(STATUS, LOW);
    Serial.println(sum / N);
    count = 0;
    sum = 0;
  } else {
    count++;
  }
} else if (temp_bak != -1 && temp - temp_bak > 2.0) {
  digitalWrite(STATUS, HIGH);
  Serial.println("Found");
  count++;
}
temp_bak = temp;
delay(500);
}
